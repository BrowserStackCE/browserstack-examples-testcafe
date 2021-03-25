import HomePage from '../../../app/pages/HomePage';
import LoginPage from '../../../app/pages/Login';
import CheckoutPage from '../../../app/pages/Checkout';
import ConfirmationPage from '../../../app/pages/Confirmation';
import OrdersPage from '../../../app/pages/Orders';


fixture("e2e")
    .page(process.env.TEST_BASE_URL);


test("Click on Sign In button and Login as fav_user ,add 3 items to cart, click on checkout, enter details, click on submit, click on continue shopping and click on orders nav item.", async (t) => {

    // login credentials for test
    const username = 'fav_user';
    const password = 'testingisfun99';


    // the  methods for the below pages are declared in their respective 
    // page object files. This is an example of the Page Object Model where a logical
    // abstraction of each page in the application to be tested is made.

    // the below test adds 1 instance each of devices with index 0, 1 and 4 to the cart and purchases them
    // finally it validates if the 3 purchases are visible on the Orders Page
    await HomePage.goToSignInPage()
    await LoginPage.login(username, password)
    await HomePage.addToCart(0,3)
    await HomePage.checkout()
    await CheckoutPage.enterDummyDetailsAndSubmit()
    await ConfirmationPage.continueShopping()
    await HomePage.goToOrdersPage();
    await OrdersPage.verifyNumberOfOrdersGreaterThan(0);

    })

