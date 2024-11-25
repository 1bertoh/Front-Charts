"use client"

import { CartesianGrid, LabelList, Line, LineChart, ResponsiveContainer, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

type TProps = {
    yAxis: string[];
    xAxis: string;
    chartData: object[]
}

export function SimpleLineChart(props: TProps) {
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
            <ChartContainer config={chartConfig} >
                <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        top: 20,
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey={xAxis}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                        formatter={(value, name) => `${name}: ${value}`}
                    />
                    {
                        yAxis.map((y) => {
                            return (
                                <Line
                                    key={y}
                                    dataKey={y}
                                    type="natural"
                                    stroke={`var(--color-${y})`}
                                    strokeWidth={2}
                                    dot={{
                                        fill: `var(--color-${y})`,
                                    }}
                                    activeDot={{
                                        r: 6,
                                    }}
                                >
                                    <LabelList
                                        position="top"
                                        offset={12}
                                        className="fill-foreground"
                                        fontSize={12}
                                    />
                                </Line>
                            )
                        })
                    }
                </LineChart>
            </ChartContainer>
        </ResponsiveContainer>
    )
}