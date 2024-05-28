import { Component } from "react";




export default class ReleaseFetch extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(" ссылка на страницу сервера, где будет лежать информация о релизах")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.release    "здесь должен быть главный json объект. найти его можно скопировав json файл в форматтере, там все нагляднее"
                }),
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if(error){
            return <p> Error {error.message} </p>
        } else if (!isLoaded){
            return <p> Loading... </p>
        } else {
            <ul>
                {items.map(
                    <li key={items.name}>
                            {item.NameOfRelease} 
                            <img src={item.LinkToReleasePhoto}></img>      "вместо NAmeOFRelease должно быть название релиза из страницы на сервере"
                    </li>
                )}
            </ul>
        }
    }
}