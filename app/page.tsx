export default function Home() {
  const dataSource = [
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
  const columns = [
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
      <h1>Welcome to Next.js!</h1>
    

      <div className="bg-gray-500 p-4 rounded-lg shadow-md">
        <p className="text-center">This is a simple Next.js application.</p>
      </div>
    </>
    
  );
}
