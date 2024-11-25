import { Table as TableNUI, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

type RowData = {
    [key: string]: string | number;
  };
  
  type TableProps = {
    data: RowData[];
  };

const Table = (props: TableProps) => {
    const {data}  = props

    const columns = data?.length > 0 ? Object.keys(data[0]) : [];

    return (
        <TableNUI
            aria-label="Dynamic Table"
            classNames={{
                base: "max-h-[520px] l",
                table: "min-h-[400px]",
              }}
        >
            {/* Gerar o cabeçalho dinamicamente */}
            <TableHeader>
                {columns?.map((col) => (
                    <TableColumn key={col}>{col.toUpperCase()}</TableColumn>
                ))}
            </TableHeader>
            {/* Gerar o corpo da tabela dinamicamente */}
            <TableBody>
                {data?.map((row: RowData, rowIndex: number) => (
                    <TableRow key={rowIndex}>
                        {columns.map((col) => (
                            <TableCell key={col}>{row[col]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </TableNUI>
    );
}

export default Table