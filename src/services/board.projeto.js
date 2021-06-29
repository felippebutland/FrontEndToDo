import React from 'react';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    api.get(`/controller/projeto`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      api.post(`/controller/projeto`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.delete(`/controller/projeto/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      api.patch(`/controller/projeto/${args.id}`, args)
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