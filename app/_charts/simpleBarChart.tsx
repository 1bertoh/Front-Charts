"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

type TProps = {
    chartData:{}[];
    xAxis: string;
    yAxis:string[];
}

export function SimpleBarChart(props: TProps) {
    const { chartData, xAxis, yAxis } = props;

    const chartConfig: any = yAxis?.reduce((config, y, index) => {
        return {
            ...config,
            [y]: {
                label: y.toUpperCase(),
                color: `hsl(var(--chart-${index + 1}))`, // Define uma cor diferente para cada ponto
            },
        } satisfies ChartConfig;
    }, {});

    return (
        <ResponsiveContainer width={"100%"} height="90%">
            <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey={xAxis}
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                    />
                    {
                        yAxis?.map((y, index) => (
                            <Bar key={y} dataKey={y} fill={`var(--color-${y})`} radius={4} />
                        ))
                    }
                </BarChart>
            </ChartContainer>
        </ResponsiveContainer>
    )
}
