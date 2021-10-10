import React from 'react'
import { Card, Button } from '@material-ui/core'

const UpgradeCard = () => {
    return (
        <Card className="p-sm-20 mb-2">
            <Card
                elevation={0}
                className="box-shadow-none text-center relative bg-light-secondary p-sm-20"
            >
                <img
                    src="/static/illustration_avatar.png"
                    alt="upgrade"
                    style={{ width:"10rem", height:"10rem" }}
                />
                <Button
                    className="uppercase"
                    size="small"
                    variant="outlined"
                    color="secondary"
                >
                    upgrade now
                </Button>
            </Card>
        </Card>
    )
}

export default UpgradeCard
