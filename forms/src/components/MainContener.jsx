import CardContener from "./CardContener"

function MainContainer({ colorTheme, colorChangeTheme, CartData, loader, }) {
  return (
    <div>
      <CardContener CartData={CartData} loader={loader} />
    </div>
  )
}

export default MainContainer