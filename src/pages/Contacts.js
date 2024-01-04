// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contact } from 'components/Contact/Contact';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Contacts() {
  return (
    <div className="content">
      <h1 className="heading">Phonebook</h1>
      <Form />
      <h2 className="heading">Contacts</h2>
      <Filter />
      <Contact />
    </div>
  );
}
