import Card from '../components/card';

const HomePage = () => {
    return(
        <div className='flex'>
            <Card 
                image={'https://cget.tango.me/contentserver/download/Ya9mbQAAiOuVsZr03MqRlA/KEDiVIiz/thumbnail'} 
                name={'Card #1'}
                URL={'iVR4JIyMTOk'}
            />

            <Card 
                image={'https://cget.tango.me/contentserver/download/YbBcbwAAgspxLsri0SWk5w/7K3Xy6ND/thumbnail'} 
                name={'Card #2'}
                URL={'wvhgGwY4W0E'}
            />

            <Card 
                image={'https://cget.tango.me/contentserver/download/YZtfcQAABIh01tjyBXbzzg/TwAbbeDo/thumbnail'} 
                name={'Card #3'}
                URL={'9A8CGxLKnpU'}
            />

            <Card 
                image={'https://cget.tango.me/contentserver/download/YaqywQAAYXkNKeB8AzX0JQ/uHFOQ6Z0/thumbnail'} 
                name={'Card #4'}
                URL={'aR5VoHVHsjQ'}
            />
            
        </div>
    )
}

export default HomePage;