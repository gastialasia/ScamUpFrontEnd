import * as React from "react";
import { useEffect, useContext } from "react";
import { Collapse, Text, Input, Grid, Button, Modal, useModal, Progress, Loading, Col } from "@nextui-org/react";
import { Api } from "../api/api";
import { useRouter } from 'next/router'
import AppContext from "../components/AppContext";


function SearchPage() {

    const context = useContext(AppContext);

    //Variables for request
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();
    const [swift, setSwift] = React.useState();
    const [score, setScore] = React.useState();
    const [KYC, setKYC] = React.useState();

    //Variables for managing result
    const [emailResult, setEmailResult] = React.useState();
    const [phoneResult, setPhoneResult] = React.useState();
    const [swiftResult, setSwiftResult] = React.useState();
    const [scoreResult, setScoreResult] = React.useState();
    const [KYCResult, setKYCResult] = React.useState();

    //Variables for conditional rendering
    const [loadingEmail, setLoadingEmail] = React.useState(false);
    const [loadingPhone, setLoadingPhone] = React.useState(false);
    const [loadingSwift, setLoadingSwift] = React.useState(false);
    const [loadingScore, setLoadingScore] = React.useState(false);
    const [loadingKYC, setLoadingKYC] = React.useState(false);

    //Variables for log in
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    //Email validation
    const validateEmail = () => {
        return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };

    const emailHelper = React.useMemo(() => {
        if (!email)
            return {
                text: "",
                color: "",
                valid: false,
            };
        const isEmailValid = validateEmail(email);
        return {
            text: isEmailValid ? "Correct email" : "Enter a valid email",
            color: isEmailValid ? "success" : "error",
            valid: isEmailValid,
        };
    }, [email]
    );

    //Phone validation
    const validatePhone = () => {
        return phone.match(/^\+(?:[0-9]●?){6,14}[0-9]$/i);
    };

    const phoneHelper = React.useMemo(() => {
        if (!phone)
            return {
                text: "",
                color: "",
                valid: false,
            };
        const isValidPhone = validatePhone(phone);
        return {
            text: isValidPhone ? "Correct phone" : "Enter a valid phone number",
            color: isValidPhone ? "success" : "error",
            valid: isValidPhone,
        };
    }, [phone]
    );

    //Swift validation
    const validateSwift = () => {
        return swift.match(/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/i);
    };

    const swiftHelper = React.useMemo(() => {
        if (!swift)
            return {
                text: "",
                color: "",
                valid: false,
            };
        const isValidSwift = validateSwift(swift);
        return {
            text: isValidSwift ? "Correct Swift" : "Enter a valid Swift code",
            color: isValidSwift ? "success" : "error",
            valid: isValidSwift,
        };
    }, [swift]
    );

    const closeHandlerEmail = () => {
        setShowEmail(false);
    };

    const closeHandlerPhone = () => {
        setShowPhone(false);
    };

    const closeHandlerSwift = () => {
        setShowSwift(false);
    };

    const closeHandlerScore = () => {
        setShowScore(false);
    };

    const [showEmail, setShowEmail] = React.useState();
    const [showPhone, setShowPhone] = React.useState();
    const [showSwift, setShowSwift] = React.useState();
    const [showScore, setShowScore] = React.useState();

    async function handleEmail() {
        try {
            setLoadingEmail(true);
            const res = await Api.getEmailData(email)
            setEmailResult(res);
            setShowEmail(true);
        } catch (err) {
            console.log('Error en mail');
        }
        setLoadingEmail(false);
    };

    async function handlePhone() {
        try {
            setLoadingPhone(true);
            const res = await Api.getPhoneData(phone)
            setPhoneResult(res);
            setShowPhone(true);
        } catch (err) {
            console.log('Error en phone');
        }
        setLoadingPhone(false);
    };

    async function handleSwift() {
        try {
            setLoadingSwift(true);
            const res = await Api.getSwiftData(swift)
            setSwiftResult(res);
            setShowSwift(true);
        } catch (err) {
            console.log('Error en swift code');
        }
        setLoadingSwift(false);
    };

    async function handleScore() {
        try {
            setLoadingScore(true);
            const data = {
                email: email,
                phone: phone,
                swift: swift,
            }
            const res = await Api.getScore(data)
            setScoreResult(res);
            setShowScore(true);
        }
        catch (err) {
            console.log("Error in score");
        }
        setLoadingScore(false)
    }

    async function handleKYC() {
        try {
            const res = await fetch(`http://localhost:8080/kyc_verification?kyc=${KYC}`);
            const data = await res.json();
            setKYCResult(data);
            handler()
        } catch (err) {
            console.log(err);
        }
    };

    // const isLoggedIn = React.useMemo(() => {
    //     return Api.token != null
    // }, [Api.token])

    const router = useRouter();

    useEffect(() => {
        if (Api.token !== null) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [Api.token]);

    return (
        context.tokenContext ?
            <div style={{ padding: 15 }}>

                <Grid.Container
                    justify="center"
                    direction="column"
                    alignContent="center"
                    alignItems="center"
                >
                    <h2 style={{ textAlign: "center" }}>Search for scammers</h2>
                </Grid.Container>

                <Grid.Container
                    justify="center"
                    direction="column"
                    alignContent="center"
                    alignItems="center"
                >
                    <h3 style={{ textAlign: "center" }} color = "primary">Calculate reputation</h3>
                    <p>
                        Click here to get a score of your counterpart reputation based on the data entered below. Please make sure the email, phone and Swift code fields are completed.
                    </p>
                    <Button
                        disabled={!emailHelper.valid || !phoneHelper.valid || !swiftHelper.valid || context.roleContext == 0}
                        onPress={handleScore}
                        width={250}
                        css={{ m: 10, zIndex: 3 }}
                    >
                        <Text>{context.roleContext == 0 ? "Get score (Premium only)" : "Get score"}</Text>
                    </Button>
                </Grid.Container>

                <Grid.Container
                    justify="center"
                    direction="column"
                    alignContent="center"
                >
                    <h3 style={{ textAlign: "center" }} color = "primary">Individual search</h3>
                    <p>
                        Expand the items below and enter the required information of
                        the person you think is a scammer. It's not mandatory to
                        fill all fields.
                    </p>
                </Grid.Container>

                <Collapse.Group accordion={false} bordered css={{ margin: 50 }} >
                    <Collapse title="Email" expanded>
                        <Text>Enter the email of the person below</Text>
                        <Grid.Container gap={2} justify="space-between">
                            <Grid>
                                <Input
                                    placeholder="example@email.com"
                                    label="Email"
                                    status={emailHelper.color}
                                    color={emailHelper.color}
                                    helperColor={emailHelper.color}
                                    helperText={emailHelper.text}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Button
                                    bordered
                                    color="primary"
                                    auto
                                    onPress={handleEmail}
                                    css={{ width: 204, zIndex: 3 }}
                                    disabled={!emailHelper.valid}
                                >
                                    {loadingEmail ? <Loading color="currentColor" size="sm" /> : 'Search by email'}
                                </Button>
                            </Grid>
                        </Grid.Container>
                    </Collapse>

                    <Collapse title="Phone number" expanded>
                        {/* {loading && <Progress indeterminated value={25} color="primary" status="primary"/>} */}
                        <Text>Enter the phone number of the person below (with country code and zone code)</Text>
                        <Grid.Container gap={2} justify="space-between">
                            <Grid>
                                <Input
                                    label="Phone"
                                    placeholder="+541162238475"
                                    status={phoneHelper.color}
                                    color={phoneHelper.color}
                                    helperColor={phoneHelper.color}
                                    helperText={phoneHelper.text}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Button
                                    bordered
                                    color="primary"
                                    auto
                                    onPress={handlePhone}
                                    css={{ width: 204, zIndex: 3 }}
                                    disabled={!phoneHelper.valid}
                                >
                                    {loadingPhone ? <Loading color="currentColor" size="sm" /> : 'Search by phone number'}
                                </Button>
                            </Grid>
                        </Grid.Container>
                    </Collapse>

                    <Collapse title="Swift Code" expanded>
                        <Text>Enter the swift code (international banking code) of the
                            person below</Text>
                        <Grid.Container gap={2} justify="space-between">
                            <Grid>
                                <Input
                                    placeholder="GABAARBAXXX"
                                    label="Swift code"
                                    status={swiftHelper.color}
                                    color={swiftHelper.color}
                                    helperColor={swiftHelper.color}
                                    helperText={swiftHelper.text}
                                    onChange={(e) => setSwift(e.target.value)}
                                />
                            </Grid>
                            <Grid>
                                <Button
                                    bordered
                                    color="primary"
                                    auto
                                    onPress={handleSwift}
                                    css={{ width: 204, zIndex: 3 }}
                                    disabled={!swiftHelper.valid}
                                >
                                    {loadingSwift ? <Loading color="currentColor" size="sm" /> : 'Search by Swift code'}
                                </Button>
                            </Grid>
                        </Grid.Container>
                    </Collapse>

                    <Collapse title="Personal ID (KYC) coming soon..." disabled>
                        <Text>Enter submit the personal ID to do an exhaustive KYC
                            analysis of the person you think is a scammer</Text>
                        <Grid.Container gap={2} justify="space-between">
                            <Grid>
                                <Input
                                    placeholder="Personal ID"
                                    label="Personal ID"
                                    status="primary"
                                    onChange={(e) => {
                                        setKYC(e.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid>
                                <Button
                                    bordered
                                    color="primary"
                                    auto
                                    onPress={handleKYC}
                                    css={{ width: 204, zIndex: 3 }}
                                >
                                    Search by KYC
                                </Button>
                            </Grid>
                        </Grid.Container>
                    </Collapse>
                </Collapse.Group>

                <Modal
                    scroll
                    width="600px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={showEmail}
                    onClose={closeHandlerEmail}
                >
                    <Modal.Header>
                        <Text id="modal-title" h2 color="primary">
                            Email Result
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Grid.Container direction="column">
                            <Text id="modal-description">
                            </Text>
                            <Text id="modal-title" h4>
                                {emailResult?.email}
                            </Text>
                            {emailResult?.details.domain_exists === false ? 
                            <Text id="modal-title" size={20} >
                                "This domain doesn't exist"
                            </Text> : <div/>}
                            <Text id="modal-title" h2 style={emailResult?.suspicious ? { color: 'red' } : { color: 'green' }}>
                                {emailResult?.suspicious ? "Suspicious" : "Not Suspicious"}
                            </Text>
                            <Text id="modal-title" size={20}>
                                Reputation: <b>{emailResult?.reputation}</b>
                            </Text>
                            <Text id="modal-title" size={20} >
                                {emailResult?.details.blacklisted ? "Blacklisted email" : "Not blacklisted email"}
                            </Text>
                            <Text id="modal-title" size={20} >
                                {emailResult?.details.malicious_activity ? "Malicious activity detected" : "No malicious activity detected"}
                            </Text>
                            <Text id="modal-title" size={20} >
                                {emailResult?.details.credentials_leaked ? "This email credentials have been leaked" : "No leaked credentials reported"}
                            </Text>
                            <Text id="modal-title" size={20} >
                                {emailResult?.details.data_breach ? "This email has been in a data breach" : "This email is safe from data breaches"}
                            </Text>
                            <Text id="modal-title" size={20} >
                                Last seen: {emailResult?.details.last_seen}
                            </Text>
                            <Text id="modal-title" size={20} >
                                {emailResult?.details.spam ? "Spam detected" : "Spam not detected"}
                            </Text>
                            <Text id="modal-title" size={20} >
                                {emailResult?.details.free_provider ? "This email is free provided" : "This is a paid email"}
                            </Text>
                            <Text id="modal-title" size={20} >
                                {emailResult?.details.spoofable ? "Spoofable email" : "Non spoofable email"}
                            </Text>
                            <Text id="modal-title" size={20} >
                                {emailResult?.details.spf_strict ? "Has receiving restrictions" : "Has no receiving restrictions"}
                            </Text>
                            <Text id="modal-title" size={20} >
                                {emailResult?.details.spf_strict ? "Has DMARC enforcement" : "No DMARC enforcement detected"}
                            </Text>
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto onPress={() => setShowEmail(false)}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    scroll
                    width="600px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={showPhone}
                    onClose={closeHandlerPhone}

                >
                    <Modal.Header>
                        <Text id="modal-title" h2 color="primary">
                            Phone Result
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Grid.Container direction="column">
                            <Text id="modal-description">
                            </Text>
                            <Text id="modal-title" h2 style={phoneResult?.suspicious ? { color: 'red' } : { color: 'green' }}>
                                {phoneResult?.valid ? "Valid" : "Invalid"}
                            </Text>
                            <Text id="modal-title" size={20}>
                                Country: <b>{phoneResult?.country_name}</b>
                            </Text>
                            <Text id="modal-title" size={20}>
                                Location: <b>{phoneResult?.location}</b>
                            </Text>
                            <Text id="modal-title" size={20} >
                                Carrier: <b>{phoneResult?.carrier}</b>
                            </Text>
                            <Text id="modal-title" size={20} >
                                Line type: <b>{phoneResult?.line_type}</b>
                            </Text>
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto onPress={() => setShowPhone(false)}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    scroll
                    width="600px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={showSwift}
                    onClose={closeHandlerSwift}
                >
                    <Modal.Header>
                        <Text id="modal-title" h2 color="primary">
                            Swift Code Result
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Grid.Container direction="column">
                            <Text id="modal-description">
                            </Text>
                            <Text id="modal-title" h3>
                                {swiftResult?.data.bank.name}
                            </Text>
                            <Text id="modal-title" size={20}>
                                Bank code: <b>{swiftResult?.data.bank.code}</b>
                            </Text>
                            <Text id="modal-title" size={20}>
                                Country: <b>{swiftResult?.data.country.name}</b>
                            </Text>
                            <Text id="modal-title" size={20}>
                                City: <b>{swiftResult?.data.city.name}</b>
                            </Text>
                            <Text id="modal-title" size={20}>
                                Address: <b>{swiftResult?.data.address}</b>
                            </Text>
                            <Text id="modal-title" size={20}>
                                Postal code: <b>{swiftResult?.data.postcode}</b>
                            </Text>
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto onPress={() => setShowSwift(false)}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    width="600px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={showScore}
                    onClose={closeHandlerScore}
                >
                    <Modal.Header>
                        <Text id="modal-title" h2 color="primary">
                            Score results
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Grid.Container gap={2}>
                            <Grid xs={12}>
                                <Col>
                                    <Text>Email score: {parseFloat(scoreResult?.mailScore).toFixed(1)}/5</Text>
                                    <Progress color="primary" animated={false} value={parseInt(scoreResult?.mailScore*10, 10)} max={50} />
                                </Col>
                            </Grid>
                            <Grid xs={12}>
                                <Col>
                                    <Text>Phone score: {scoreResult?.phoneScore}/2</Text>
                                    <Progress color="primary" animated={false} value={scoreResult?.phoneScore*10} max={20} />
                                </Col>
                            </Grid>
                            <Grid xs={12}>
                                <Col>
                                    <Text>Swift score: {scoreResult?.swiftScore}/3</Text>
                                    <Progress color="primary" animated={false} value={scoreResult?.swiftScore*10} max={30} />
                                </Col>
                            </Grid>
                            <Grid xs={12}>
                                <Col>
                                    <Text>Overall: {parseFloat(scoreResult?.totalScore).toFixed(1)}/10</Text>
                                    <Progress color="primary" animated={false} value={scoreResult?.totalScore*10} max={100} />
                                </Col>
                            </Grid>
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto onPress={() => setShowScore(false)}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div> :
            <Grid.Container gap={2} direction="column" justify="center" alignContent="center" alignItems="center">
                <Grid>
                    <Text color="Grey" size={40}>You are not logged in</Text>
                </Grid>
                <Grid>
                    <Text color="Grey">Please log in or create a ScamUp account to start searching for scammers.</Text>
                </Grid>
            </Grid.Container>
    );
}

export default SearchPage;