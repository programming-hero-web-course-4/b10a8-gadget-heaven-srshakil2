import { BarChart, XAxis, YAxis, Bar } from "recharts";

const Chart = () => {
  const data = [
    { product: "Gaming Laptop", value: 1299.99 },
    { product: "Business Laptop", value: 899.99 },
    { product: "Smartphone", value: 699.99 },
    { product: "Wireless Earbuds", value: 149.99 },
    { product: "Laptop Stand", value: 49.99 },
    { product: "Phone Case", value: 19.99 },
    { product: "External Hard Drive", value: 89.99 },
    { product: "4K Monitor", value: 399.99 },
    { product: "Bluetooth Keyboard", value: 59.99 },
    { product: "Smartphone Charger", value: 29.99 },
  ];

  return (
    <div className="p-10">
      <h3 className=" text-4xl font-semibold text-violet-500 text-center pb-6">
        Product BarChart
      </h3>
      <div className=" flex justify-center ">
        <BarChart width={1200} height={600} data={data}>
          <XAxis dataKey={"product"} interval={0} />
          <YAxis dataKey={"value"} />
          <Bar dataKey={"value"} fill="violet" />
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;
