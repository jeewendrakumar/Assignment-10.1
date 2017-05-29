import React from "react";
import Book from "./Book";

export default class Books extends React.Component {
    constructor(props){
        super(props);
        this.state = {activeId:""};
    }
    setStatus = (id) => {
        this.setState({activeId:id});
    }
    render() {
        const {books, deleteBook} = this.props; //Getting data using props.

        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>BOOK</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) => {
                                return (<Book key={book.id} book={book} deleteBook={deleteBook} active={this.state.activeId === book.id} setStatus={this.setStatus}/>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
