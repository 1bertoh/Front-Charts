import { CardContent, CardTitle } from '@/components/ui/card'
import { Card, CardHeader } from '@nextui-org/card'
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
                </CardHeader>
                <CardContent>
                    {props.children}
                </CardContent>
            </Card>
        </div>
    )
}

export default CardChart