import React, {Component} from 'react';

class Person extends Component {
constructor(props){
super(props);
this.state = {
    login: "hamitmizrak",
    id: 15179871,
    avatar_url: "https://avatars.githubusercontent.com/u/15179871?v=4",
    url: "https://api.github.com/users/hamitmizrak",
    html_url: "https://github.com/hamitmizrak",
    name: "Java Full Stack Developer Hamit Mızrak",
    company: "Java Full Stack Developer",
    blog: "http://www.hamitmizrak.com",
    location: "Malatya",
    bio: "Yazılım benim yaşam tarzım. Dünyaya bir daha gelseydim kesinlikle Bilgisayar mühendisi olmak isterdim.",
    twitter_username: "Hamit_Mizrak",
    created_at: "2015-10-18T09:47:09Z",
}
}
    render() {
        const{login,id,name,company,blog,location,bio,twitter_username,created_at,html_url}=this.state;
        return (
            <div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={this.state.avatar_url} alt="" className="card-img"/>
                        </div>
                        <div className="col-md-9">
                           <div className="card-body">
                               <h5 className="card-title">{name}</h5>
                               <h5 className="card-title">{login}</h5>
                               <p className="card-text">{id}</p>
                               <a className="btn btn-primary" href={html_url} target="_blank" >GitHub</a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Person;