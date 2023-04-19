interface Props {
  rows: any;
  headerColor: string;
}

const Table: React.FC<Props> = ({ rows, headerColor }) => {
  const body = rows[1];
  return (
    <table>
      <thead>
        <tr>
          {rows[0]?.map((cell: any, index: any) => (
            <th key={index}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body?.map((row: any, index: any) => (
          <tr key={index}>
            {row.map((info: any, idx: any) => {
              return <td>{row[idx]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
