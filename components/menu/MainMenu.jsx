import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const MainMenu = () => {
    return (
        <div className="menu px-4 md:px-24 lg:px-36 mt-8">
            <Accordion className="bg-primary text-secondary">
                <AccordionSummary

                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className="flex justify-between w-full">
                        <div className="text-3xl"> Banglore Mandarin Special  </div>
                        <div className="text-xl">  <ExpandMoreIcon /> </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails >
                    <div className="flex justify-between">
                        <div className="text-xl"> Pork In Chilli Bean Sauce Gravy  </div>
                        <div className="text-xl"> 349 Rs </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-xl"> Basil Chicken Gravy  </div>
                        <div className="text-xl"> 319 Rs </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-xl"> Chicken Chilli Gravy  </div>
                        <div className="text-xl"> 309 Rs </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-xl"> Crispy American Chopsuey Chicken  </div>
                        <div className="text-xl"> 299 Rs </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className="bg-primary text-secondary" expandIcon={<ExpandMoreIcon />}>
                <AccordionSummary

                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                       <div className="flex justify-between w-full">
                        <div className="text-3xl"> Appatizers  </div>
                        <div className="text-xl">  <ExpandMoreIcon /> </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex justify-between">
                        <div className="text-xl"> Chicken Steamed Dumplings Momo 10PCS  </div>
                        <div className="text-xl"> 289 Rs </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-xl"> Chilly Tofu DRY  <span className="text-sm">(Must Try)</span> </div>
                        <div className="text-xl"> 269 Rs </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className="bg-primary text-secondary" expandIcon={<ExpandMoreIcon />}>
                <AccordionSummary

                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                       <div className="flex justify-between w-full">
                        <div className="text-3xl"> Non Veg Soups  </div>
                        <div className="text-xl">  <ExpandMoreIcon /> </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="bg-primary text-secondary" expandIcon={<ExpandMoreIcon />}>
                <AccordionSummary

                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                      <div className="flex justify-between w-full">
                        <div className="text-3xl">Veg Soups  </div>
                        <div className="text-xl">  <ExpandMoreIcon /> </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}
export default MainMenu;