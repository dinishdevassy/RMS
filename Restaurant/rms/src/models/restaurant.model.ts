export class RestaurantModel{
    constructor(
        public name,
        public phno,
        public email,
        public city,
        public star,
        public opentime,
        public closetime,
        public ownerid,
        //public tablecount,
         public tablelist={
             seat_1:0,
             seat_2:0,
             seat_4:0,
             seat_6:0,
             seat_8:0,
             seat_10:0,
         },
            
       //public tablelist={seat_1:0,seat_2:0,seat_4:0,seat_6:0,seat_8:0,seat_10:0} ,
       public image,
        public status
    ){}
    
}