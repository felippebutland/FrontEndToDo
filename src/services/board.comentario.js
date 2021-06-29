import React from 'react';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    api.get(`/controller/comentario`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      api.post(`/controller/comentario`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.delete(`/controller/comentario/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.patch(`/controller/comentario/${args.id}`, args)
          .then(res => {
            res.data})
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}