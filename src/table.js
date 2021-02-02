function mytable(props) {
  const { persons } = props;
  return (
    <table class="table is-bordered mb-3">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>{persons.name}</td>
          <td>{persons.gender}</td>
          <td>{persons.age}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default mytable;
