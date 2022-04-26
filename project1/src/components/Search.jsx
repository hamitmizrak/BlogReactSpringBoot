import React, {Component} from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)

        //bind:veri kaybolmaması icin
        this.onChange = this.onChange.bind(this);

        //bind:veri kaybolmaması icin
        this.onSubmit = this.onSubmit.bind(this);

        //state
        this.state = {
            data: '',
        }
    }

    //input içine birşeyler yazıldığında hemen almak istediğimizde
    onChange(e) {
        //console.log(e.target.value);
        this.setState({
            data: e.target.value
        });
    }

    //input içine birşeyler yazıldıktan sonra submit edildiğinde
    onSubmit(e) {
        e.preventDefault();  //sayfa yenilemeden
        console.log(this.state.data)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="d-flex my-2 my-lg-0">
                    <div className="input-group">
                        <input type="text" onChange={this.onChange} className="form-control form-control me-sm-2"
                               placeholder="Arama için yazınız..."/>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">
                                Arama
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
