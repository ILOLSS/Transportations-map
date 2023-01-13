export default function MakeTableDataSource(data) {
    const tableData = [];
    Object.keys(data).forEach((key) => {
        let value = {...data[key]};
        value.key = value.id;
        value.number = `№${value.id}`;
        tableData.push(value);
    });
    return tableData;
}