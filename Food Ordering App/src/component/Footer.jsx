const Footer = () => {
  return (
    <div className="bg-orange-900 py-6 flex justify-center items-center text-white text-center">
      <p>
        © {new Date().getFullYear()} MealHop .<br />
        Website lovingly crafted with ❤️ by <a href="https://www.youtube.com/watch?v=q3zqJs7JUCQ&list=RDq3zqJs7JUCQ&start_radio=1" className="underline">Shivansh Pandey</a>.
     </p>
    </div>
  );
};



export default Footer;