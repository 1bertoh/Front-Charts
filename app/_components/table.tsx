import { Table as TableNUI, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

type RowData = {
    [key: string]: string | number; // Allow keys to be indexed with `string` and values as `string` or `number`
  };
  
  type TableProps = {
    data: RowData[];
  };

const salesByClient = [
    {
        NOMECLI: "ALEX - NF",
        Total_Sales_No_IPI: 4176,
        Total_Discounts_With_IPI: 4176,
        Total_Discounts_Discount: 0,
    },
    {
        NOMECLI: "ALIANÇA COM. DE MARMORES E GRANITOS LTDA",
        Total_Sales_No_IPI: 41415.04,
        Total_Discounts_With_IPI: 41415.04,
        Total_Discounts_Discount: 0,
    },
    {
        NOMECLI: "ANTONIO BATEMARQUE DE OLIVEIRA ME ( MARMORARIA PORTO BELO)",
        Total_Sales_No_IPI: 187176.16,
        Total_Discounts_With_IPI: 187176.16,
        Total_Discounts_Discount: 0,
    },
    {
        NOMECLI: "ANTONIO CARLOS DA SILVA GAVA ME",
        Total_Sales_No_IPI: 6639.5,
        Total_Discounts_With_IPI: 6639.5,
        Total_Discounts_Discount: 0,
    },
    {
        NOMECLI: "ANTONIO MUSSI NETO",
        Total_Sales_No_IPI: 2824.51,
        Total_Discounts_With_IPI: 2824.51,
        Total_Discounts_Discount: 1840,
    },
];

const Table = (props: TableProps) => {
    const {data}  = props

    console.log(data, 'data da tabela')
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