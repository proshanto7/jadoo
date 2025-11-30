function Title( {title , subtitle} :{title:string , subtitle:string}) {
  return (
    <div className="text-center ">
      <h5 className="font-Poppins font-semibold text-[18px] text-textColor">
        {title}
      </h5>

      <h2 className="lg:text-[50px] text-2xl md:text-3xl font-Volkhov font-bold text-primary">
        {subtitle}
      </h2>
    </div>
  );
}

export default Title;
