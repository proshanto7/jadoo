function Title( {title , subtitle} :{title:string , subtitle:string}) {
  return (
    <div className="text-center ">
      <h5 className="font-Poppins font-semibold text-[18px] text-textColor">
        {title}
      </h5>

      <h2 className="text-[50px] font-Volkhov font-bold text-primary">
        {subtitle}
      </h2>
    </div>
  );
}

export default Title;
