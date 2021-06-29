import React from 'react';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    api.get(`/controller/grupo`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      api.post(`/controller/grupo`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.delete(`/controller/grupo/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.patch(`/controller/grupo/${args.id}`, args)
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