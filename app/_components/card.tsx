import { CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import { TrendingUp } from 'lucide-react'
import React from 'react'

type Props = {
    children: React.JSX.Element;
    title: string
}

const CardChart = (props: Props) => {
    return (
        <div>
            <Card className='bg-light-background p-5 rounded-2xl' style={{boxShadow: "inset 0px 0px 60px 20px rgba(0,0,0,0.5)"}}>
                <CardHeader>
                    <CardTitle className='text-xl mr-2'>{props.title}</CardTitle>
                    {/* <CardDescription className='text-slate-300'>January - June 2024</CardDescription> */}
                </CardHeader>
                <CardContent>
                    {props.children}
                </CardContent>
                {/* <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                    </div>
                </CardFooter> */}
            </Card>
        </div>
    )
}

export default CardChart