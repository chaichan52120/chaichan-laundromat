import { readonly } from "vue";
interface machineType {
  id: number;
  name: string;
  rates: number;
  timer: number;
}

const machineList = readonly<machineType[]>([
  {
    id: 1,
    name: "เครื่องซักผ้า 1",
    rates: 20,
    timer: 120,
  },
  {
    id: 2,
    name: "เครื่องซักผ้า 2",
    rates: 20,
    timer: 120,
  },
  {
    id: 3,
    name: "เครื่องซักผ้า 3",
    rates: 20,
    timer: 120,
  },
  {
    id: 4,
    name: "เครื่องซักผ้า 4",
    rates: 30,
    timer: 180,
  },
  {
    id: 5,
    name: "เครื่องซักผ้า 5",
    rates: 30,
    timer: 180,
  },
  {
    id: 6,
    name: "เครื่องซักผ้า 6",
    rates: 30,
    timer: 180,
  },
  {
    id: 7,
    name: "เครื่องซักผ้า 7",
    rates: 40,
    timer: 300,
  },
  {
    id: 8,
    name: "เครื่องซักผ้า 8",
    rates: 40,
    timer: 300,
  },
  {
    id: 9,
    name: "เครื่องซักผ้า 9",
    rates: 40,
    timer: 300,
  },
  {
    id: 10,
    name: "เครื่องซักผ้า 10",
    rates: 40,
    timer: 300,
  },
]);

export { machineList };
