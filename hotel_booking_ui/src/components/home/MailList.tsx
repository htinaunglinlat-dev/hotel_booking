const MailList = () => {
   return (
      <div className="w-100 mt-[50px] bg-blue white flex flex-col justify-center items-center gap-[20px] py-[30px]">
         <h1 className="mailTitle">Save time, save money!</h1>
         <span className="mailDesc">Sign up and we'll send the best deals to you</span>
         <div className="mailInputContainer">
            <input className="w-[300px] h-[30px] p-[10px] b-none mr-[10px] rounded-[5px]" placeholder="Your Email" />
            <button type="button" className="h-[50px] bg-blue1 white bold b-none rounded-[5px] pointer click">Subscribe</button>
         </div>
      </div>
   )
}

export default MailList