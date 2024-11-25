'use client'
import { SimpleBarChart } from "./_charts/simpleBarChart";
import CardChart from "./_components/card";
import { SimpleLineChart } from "./_charts/simpleLineChart";
import { Divider } from "@nextui-org/divider";
import Menu from "./_components/menu";
import Select from "./_components/select";
import { useEffect, useState } from "react";
import axios from "axios";
import { General_Request, Sales_by_Agent, Sales_by_Client, Total_Sales_and_Discounts } from "@/types/types";
import Table from "./_components/table";
import Loading from "./_components/loading";


export default function Home() {
  const [year, setYear] = useState<{ year: string }>({ year: "all" })
  const [sellByPeriodFilterValue, setSellByPeriodFilterValue] = useState<{ granularity: string }>({ granularity: "monthly" })
  const [valuesComparisonFilterValue, setValuesComparisonFilterValue] = useState<{ granularity: string, comparison: string }>({ granularity: "monthly", comparison: "ipi" })
  const [specificSalesFilterValue, setSpecificSalesFilterValue] = useState<{ salesBy: string }>({ salesBy: "agent" })
  const [response, setResponse] = useState<General_Request>({} as General_Request)
  const [responseFilter, setResponseFilter] = useState<General_Request>({} as General_Request)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetch = async () => {
      
      const response = await axios.get(
        `https://back-chart.onrender.com`,
      );
      const r: General_Request = response.data
      setResponse(r)
      setResponseFilter(r)
      setIsLoading(false)
    }
    fetch()
  }, [])

  useEffect(() => {
    if (!response.Cid_Sales) return;


    if (year.year == "all") return setResponseFilter(response);

    setResponseFilter((previous) => {
      setIsLoading(true)

      const filtering =  {
        Cid_Sales: response.Cid_Sales.filter((i) => i.Interval.split("-")[0] == year.year),
        Sales_by_Agent: response.Sales_by_Agent.filter((i) => i.Interval.split("-")[0] == year.year),
        Sales_by_Client: response.Sales_by_Client.filter((i) => i.Interval.split("-")[0] == year.year),
        Top_Products: response.Top_Products.filter((i) => i.Interval.split("-")[0] == year.year),
        Total_Sales_and_Discounts: response.Total_Sales_and_Discounts.filter((i) => i.Interval.split("-")[0] == year.year),
        UF_Sales: response.UF_Sales.filter((i) => i.Interval.split("-")[0] == year.year)
      }
      setIsLoading(false)
      
      return filtering
    })
  }, [year])

  return (
    <>
    {
      isLoading &&
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <Loading/>
      </div>
    }
      <Menu onChange={setYear} value={year.year} />
      <div className="flex flex-col gap-8 pt-10">
        <SellByPeriod chartValue={responseFilter.Total_Sales_and_Discounts} filterValue={sellByPeriodFilterValue} onChange={setSellByPeriodFilterValue} />
        <Divider className="bg-slate-200 " />
        <ValuesComparison chartValue={responseFilter.Total_Sales_and_Discounts} filterValue={valuesComparisonFilterValue} onChange={setValuesComparisonFilterValue} />
        <Divider className="bg-slate-200" />
        <SpecificSales chartValue={{ agent: responseFilter?.Sales_by_Agent, client: responseFilter?.Sales_by_Client }} filterValue={specificSalesFilterValue} onChange={setSpecificSalesFilterValue} />
        <div className="max-h-[400px]">
        </div>
      </div>
    </>
  );
}

type TSBP = {
  filterValue: { granularity: string };
  chartValue: Total_Sales_and_Discounts[];
  onChange: Function
}
const SellByPeriod = (props: TSBP) => {
  const { chartValue } = props

  return (
    <div className="">
      <CardChart title="Vendas por período">
        <div className="h-[600px]">
          <SimpleLineChart chartData={chartValue} xAxis="Interval" yAxis={["Total_Sales"]} />
        </div>
      </CardChart>
    </div>
  )
}

type TVC = {
  filterValue: { granularity: string; comparison: string };
  chartValue: Total_Sales_and_Discounts[];
  onChange: Function
}
const ValuesComparison = (props: TVC) => {
  const { onChange, filterValue: { comparison }, chartValue } = props;

  const getComparisonFields = () => {
    switch (comparison) {
      case "ipi":

        return ["Total_Sales", "Total_Sales_With_IPI"]
      case "discount":

        return ["Total_Sales", "Total_Discounts_Discount"]

      default:
        return ["Total_Sales", "Total_Sales_With_IPI"];
    }
  }

  useEffect(() => {
  }, [comparison])

  const selectItemsComparison = [
    { value: "ipi", content: "Com IPI VS Sem IPI" },
    { value: "discount", content: "Com Disconto VS Sem Disconto" },
  ]

  const selectItemsPeriod = [
    { value: "dayly", content: "Dia" },
    { value: "weekly", content: "Semana" },
    { value: "monthly", content: "Mês" },
    { value: "yearly", content: "Ano" },
  ]

  return (
    <div className="">
      <CardChart title="Comparação de valores">
        <div className="h-[600px]">
          <div className="mb-3">
            <Select items={selectItemsComparison} value={comparison} label="Escolha uma Comparação" onChange={(value: any) => onChange({ ...props.filterValue, comparison: value.target.value })} />
          </div>
          <SimpleBarChart chartData={chartValue} xAxis="Interval" yAxis={getComparisonFields()} />
        </div>
      </CardChart>
    </div>
  )
}

type TSS = {
  filterValue: { salesBy: string };
  chartValue: { agent: Sales_by_Agent[], client: Sales_by_Client[] };
  onChange: Function
}
const SpecificSales = (props: TSS) => {
  const { onChange, filterValue: { salesBy }, chartValue: { agent, client } } = props;
  const selectItems = [
    { value: "client", content: "Vendas por Clientes" },
    { value: "agent", content: "Vendas por Representantes" },
  ]

  const getSales = () => {
    switch (salesBy) {
      case "client":
        return client
      case "agent":

        return agent

      default:
        return client;
    }
  }

  return (
    <div className="">
      <CardChart title="Vendas específicas">
        <div className="h-[600px]">
          <div className="mb-3">
            <Select value={salesBy} items={selectItems} label="Escolha uma Visão" onChange={(value: any) => onChange({ salesBy: value.target.value })} />
          </div>
          {
            client && client.length ?
              <Table data={getSales()} /> : <></>
          }
        </div>
      </CardChart>
    </div>
  )
}
