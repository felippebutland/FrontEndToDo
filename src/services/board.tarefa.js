import React from 'react';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    api.get(`/controller/tarefa`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      api.post(`/controller/tarefa`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.delete(`/controller/tarefa/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.patch(`/controller/tarefa/${args.id}`, args)
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