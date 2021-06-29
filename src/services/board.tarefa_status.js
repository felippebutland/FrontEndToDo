import React from 'react';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    api.get(`/controllers/tarefaStatus`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      api.post(`/controllers/tarefaStatus`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.delete(`/controllers/tarefaStatus/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.patch(`/controllers/tarefaStatus/${args.id}`, args)
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