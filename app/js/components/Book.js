import React from "react";

export default class Book extends React.Component {
    constructor(props){
        super(props);
        this.state = {activeId:""};
    }
    handleBookDelete = (event) => {
        const {book} = this.props;

        event.stopPropagation();
        console.log("Delete book with id: ", book.id, " and name: ", book.title);
        this.props.deleteBook(book.id);
    }
    handleStatus = () =>{
        const {book} = this.props;
        this.props.setStatus(book.id);
    }
    render() {
        const {book, active} = this.props;

        return (
            <tr onClick={this.handleStatus}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                    {active && <button type="button" className="btn btn-danger" onClick={this.handleBookDelete}>Delete</button>}
                </td>
            </tr>
        );
    }
}
