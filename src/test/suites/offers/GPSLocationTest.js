import { Selector, ClientFunction } from 'testcafe';


fixture("offers")
    .page(process.env.TEST_BASE_URL);


const submitAction = ClientFunction(() => {
    navigator.geolocation.getCurrentPosition = function(cb){cb({ coords: {accuracy: 20,altitude: null,altitudeAccuracy: null,heading: null,latitude: 19.043192,longitude: 72.86305240000002,speed: null}}); };
});

const submitAction_1 = ClientFunction(() => {
    window.navigator.geolocation.getCurrentPosition = function(cb){cb({ coords: {accuracy: 20,altitude: null,altitudeAccuracy: null,heading: null,latitude: 19.043192,longitude: 72.86305240000002,speed: null}}); }
});


test("Set GPS location to Mumbai, Click on Sign In button, Login as fav_user and click on Offers", async (t) => {

    const userName          = "fav_user";
    const password          = "testingisfun99";
    const signInButton      = Selector('#signin');
    const userNameInput     = Selector('#username input');
    const passwordInput     = Selector('#password input');
    const loginButton       = Selector('#login-btn');
    const offersNavButton   = Selector('#offers');
    const ordersList        = Selector('.offer');
    const offersCount       = ordersList.count;
        
    await submitAction();
    await submitAction_1();
    await t
        .click(signInButton)
        .typeText(userNameInput,userName)
        .pressKey('enter')
        .typeText(passwordInput,password)
        .pressKey('enter')
        .click(loginButton)
        .click(offersNavButton)
        .expect(offersCount)
        .gt(0);
        
})



