import React, { useState } from 'react'
import { Form } from './Form'
import Table from './Table'

const App = () => {
  const [entries, setEntries] = useState([])

  const onAddNewEntry = (name, age) => {
    setEntries([
      ...entries,
      { name, age }
    ])
  }

  return (
    <table style={{ display: 'flex', gap: '50px' }}>
      <Form onAdd={onAddNewEntry} />
      <Table entries={entries} />
    </table>
  )
}

export default App;
