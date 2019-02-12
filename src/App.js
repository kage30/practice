import * as React from 'react';
import axios from 'axios';
import './App.css';



class App extends React.Component {
    

    constructor(props){
        super(props);

        this.state = {
            isLogin:false,
            departmentList : [],
            departmentId: '',
            userList:[],
            totalPage: '',
            currentPage: '',
            word: '',
        };
    }

    componentDidMount() {
        this.httpClient = axios.create({
            baseURL:'https://kadou.i.nijibox.net/api',
            withCredentials:true,
        });


        this.loadAuth()
            .then(()=>{
                if(! this.state.isLogin){
                    return Promise.resolve();
                }
                return this.loadDepartments();
            })
            .catch((err)=>{
                alert("APIがエラーを返しました\n\n" + err);
            })

        ;
    }
    loadAuth(){
        return this.httpClient.get('/auth' , {params:{callback:'http://localhost:3000'}})
            .then(this.commonResponseHandling)
            .then((result)=>{
                if(result.is_login){
                    this.setState({isLogin:true});
                }else if(result.auth_url){
                    window.location.href = result.auth_url;
                }
            });
    }
    loadDepartments(){
        return this.httpClient.get('/who/departments')
            .then(this.commonResponseHandling)
            .then((result)=>{
                this.setState({departmentList : result});
            })
    }

    commonResponseHandling(res){
        console.debug(res);
        if(res.data.code !== "200"){
            console.error(res.data.data);
            return Promise.reject("API Error:" + res.data.data.message);
        }
        return Promise.resolve(res.data.data);
    }



    loadUser(e){
      const params = {
        department_id: e.target.value || this.state.departmentId,
        page: e.target.getAttribute('data-page') || 1,
        query: this.state.word,
      };
      return this.httpClient.get('/who/search', {params:params})
          .then(this.commonResponseHandling)
          .then((result)=>{
            this.setState({
              departmentId: params.department_id,
              userList : result.item_list,
              totalPage : result.summary.total_pages,
              currentPage: result.summary.current_page,
            });
          })
    }

    handleChange(word){
      this.setState({word: word});
    }

    

    clickHandler = ()=>{
        this.loadUser()
            .catch((err)=>{
                alert('エラー発生');
            });
    };




    render() {
      const memberList = this.state.userList.map((row,index)=>{
        return <div className='members_card' key={index}>
        <p className='members_name'>{row.user_name}</p>
        <img src={row.photo_url} alt={row.user_name} />
        </div>;
      })

      let totalPages = this.state.totalPage;
      let currentPage = this.state.currentPage;


      return (
          <div>
              <form>
                <label>
                  部署を選択してください 
                  <select onChange={e => this.loadUser(e)}>
                    <option value='0'>選択してください</option>
                    <option value='2'>MP事業部</option>
                    <option value='3'>OS事業部</option>
                    <option value='8'>UI/UX制作室</option>
                    <option value='4'>開発室</option>
                    <option value='5'>クリエイティブ室</option>
                    <option value='6'>QAグループ</option>
                    <option value='7'>経営企画室</option>
                    <option value='1'>ニジボックス</option>
                  </select>
                </label>
              </form>

              <input type="text" value={this.state.word} onChange={e => this.handleChange(e.target.value)}/>
              <button onClick={e => this.loadUser(e)}>検索</button>

              <div className='members'>
                {memberList}
                <div className="pager">
                  <button type="button" className="" onClick={e => this.loadUser(e)} data-page={this.state.currentPage - 1} > 前へ</button>
                  <div className="pager__page">{currentPage}/{totalPages}ページ</div>
                  <button type="button" className="" onClick={e => this.loadUser(e)} data-page={this.state.currentPage + 1} >次へ</button>
                </div>

              </div>
          </div>
      );
    }
}

export default App;
