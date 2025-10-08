import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
type DataSourceItem = {
  key: string;
  name: string;
  age: number;
  address: string;
};

type Column = {
  title: string;
  dataIndex: keyof DataSourceItem;
  key: string;
};

export default function Home() {
  const dataSource: DataSourceItem[] = [
    {
      key: "1",
      name: "John Doe",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "Jane Smith",
      age: 28,
      address: "11 Downing Street",
    },
    {
      key: "3",
      name: "Sam Green",
      age: 45,
      address: "12 Downing Street",
    },
  ];
  const columns: Column[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <>
    <div className="p-10">
 <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
       {columns.map((column) => (
        <TableHead key={column.key}>{column.title}</TableHead>
       ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {dataSource.map((data) => (
        <TableRow key={data.key}>
          {columns.map((column) => (
            <TableCell key={column.key}>{data[column.dataIndex]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table> 
    </div>
   
    </>
  );
}
