const router = require("express").Router();
const { SentimentSatisfiedAltOutlined } = require("@material-ui/icons");
// Bring in the User Registration function
const Jackpot = require("../models/Jackpot");
const nodeMailer = require('nodemailer');

const {
    userAuth,
    checkRole,
} = require("../utils/Auth");
  
// Users Registeration Route
router.post("/add-jackpot", 
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {     

      try {
        const newJackpot = new Jackpot({
            type: req.body.type,
            jackpot: req.body.jackpot,
            cashvalue: req.body.cashvalue,
        });
        console.log("before")
        
        await newJackpot.save();
        await sendMail(req.body);
        console.log("after")

        return res.status(201).json({
          message: "Jackpot updated successfully!",
          success: true
        });

      } catch (err) {
        console.log(err)
        return res.status(500).json({
          message: "Unable to update jackpot.",
          success: false
        });
    }
});
router.get("/", 
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {     
    console.log("working")
      try {
        const jackpots = await Jackpot.find().sort({$natural:-1})
    
        return res.status(201).json(jackpots);

      } catch (err) {
        console.log(err)
        return res.status(500).json({
          message: "Unable to gets jackpot.",
          success: false
        });
    }
});

router.get("/mega", 
  async (req, res) => {     
      try {
        const mega = await Jackpot.find({type:'mega'}).sort({ $natural: -1 })
        
        if(mega[0])
          return res.status(201).json(mega[0]);
        else
          return res.status(404).json({err: "Not found"})

      } catch (err) {
        console.log(err)
      
        return res.status(500).json({
          message: "Unable to get home jackpot.",
          success: false
        });
    }
});

router.get("/pick6", 
  async (req, res) => {     
      try {
        const pick = await Jackpot.find({type:'pick6'}).sort({ $natural: -1 })
        
        if(pick[0])
          return res.status(201).json(pick[0]);
        else
          return res.status(404).json({err: "Not found"})

      } catch (err) {
        console.log(err)
        return res.status(500).json({
          message: "Unable to get pick jackpot.",
          success: false
        });
    }
});
router.get("/power", 
  async (req, res) => {     
      try {
        const power = await Jackpot.find({type:'powerball'}).sort({ $natural: -1 })
        
        if(power[0])
          return res.status(201).json(power[0]);
        else
          return res.status(404).json({err: "Not found"})

      } catch (err) {
        console.log(err)
      
        return res.status(500).json({
          message: "Unable to get power ball jackpot.",
          success: false
        });
    }
});

async function sendMail(data) {

  var transpoter = nodeMailer.createTransport({
      service:'gmail',
      auth:{
          user:'reactproject4@gmail.com',
          pass:'nuisolution'
      }
  });
  
  var body = '<b>Jackpot Updated</b>,<br>'+
  `<br> Type: ${ data.type } ` +
  `<br> Jackpot: ${ data.jackpot } ` +
  `<br> Cash Value: ${ data.cashvalue } ` 
                                                                                                                              // [avg_bill,roof_space,panel_needed,kw_system_size,tax_26, loanpal25, loanpal25_NTC,savings1,bill_in_year,cost5yrs,sav5yrs,savings2,elecbill20yrs,price,netprice,annual_production,kw_days,kw_month]
  var mailOption = {
      from:'reactproject4@gmail.com',
      to: 'reactproject4@gmail.com',
      subject: 'Jackpot Update!',
      html: body
  };
  
  let info = await transpoter.sendMail(mailOption).catch(err => { return err});
  console.log(info) 
  return {info: info};
  
}

module.exports = router;
 