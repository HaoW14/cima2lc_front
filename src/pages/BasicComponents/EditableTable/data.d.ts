interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

interface EditableRowProps {
  index: number;
}

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: string;
  record: Item;
  handleSave: (record: Item) => void;
}

interface EditableColumnProps {
  dataColumns: [];
  operColumns?: [];
  dataSource?: [];
}
export { EditableRowProps, EditableCellProps, EditableColumnProps };