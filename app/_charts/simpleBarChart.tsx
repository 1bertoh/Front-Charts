"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

type TProps = {
    chartData:object[];
    xAxis: string;
    yAxis:string[];
}

export function SimpleBarChart(props: TProps) {
    const { chartData, xAxis, yAxis } = props;

    const chartConfig = yAxis?.reduce((config, y, index) => {
        return {
            ...config,
            [y]: {
                label: y.toUpperCase(),
                color: `hsl(var(--chart-${index + 1}))`,
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
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                    />
                    {
                        yAxis?.map((y) => (
                            <Bar key={y} dataKey={y} fill={`var(--color-${y})`} radius={4} />
                        ))
                    }
                </BarChart>
            </ChartContainer>
        </ResponsiveContainer>
    )
}
