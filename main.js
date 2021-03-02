Vue.createApp({
    data(){
        return{
            time: '',
            rate: '',
            totalMoney: '',
            overRate: '',
            overTime:'',
            vacation: '',
            bonus: '',
            bonusCheck: '',
            tax: '',
            taxFivePercentCheck: '',
            dollarRate: '',
        }
    },
    methods:{
        calcMoney(){
           
            if (this.time <= 160) {

                this.totalMoney = this.time * this.rate;

            }else if (this.rate == 2) {

                
                this.overRate = 2;
                this.totalMoney = this.time * this.rate;
                this.overTime = this.time - 160;

            }
            else {
                this.overRate = this.rate / 2 + this.rate;
                this.overTime = this.time - 160;
                this.totalMoney = this.overTime * this.overRate + this.rate * 160;
            }  
            
        }

       } ,
        computed:{
            // fourPercent(){

            //     return (this.totalMoney + (this.totalMoney / 100 * (this.vacation * 4))) + 
            //     ( 45 * this.tax) + 
            //     (this.bonus * this.bonusCheck)
                        
            // },
            fourPercent(){

                return  this.totalMoney / 100 * (this.vacation * 4) ;

            },
            checkTax(){
                
                return  45 * this.tax;
 
            },
            bonusCalc(){

                return  this.bonus * this.bonusCheck;
                
            },
            totalCalc(){
                
                return Math.round(this.totalMoney + ( this.fourPercent + this.checkTax + this.bonusCalc));
                
            },
            taxFivePercentCalc(){

                return this.totalCalc * this.dollarRate / 100 * (this.taxFivePercentCheck * 5);
                
            }
                 
        }

}).mount('#wrapApp');