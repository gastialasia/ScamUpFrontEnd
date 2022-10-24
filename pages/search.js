import * as React from "react";
import { Collapse, Text, Input, Grid, Button, Modal, useModal, Progress, Loading } from "@nextui-org/react";
import { Api } from "../api/api";

function SearchPage() {
    //Variables for request
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();
    const [swift, setSwift] = React.useState();
    const [KYC, setKYC] = React.useState();

    //Variables for managing result
	const [emailResult, setEmailResult] = React.useState();
    const [phoneResult, setPhoneResult] = React.useState();
    const [swiftResult, setSwiftResult] = React.useState();
    const [KYCResult, setKYCResult] = React.useState();

    //Variables for conditional rendering
    const [loading, setLoading] = React.useState(false);

    //Email validation
    const validateEmail = () => {
        return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };
    
    const emailHelper = React.useMemo(() => {
        if (!email)
        return {
            text: "",
            color: "",
        };
        const isEmailValid = validateEmail(email);
        return {
          text: isEmailValid ? "Correct email" : "Enter a valid email",
          color: isEmailValid ? "success" : "error",
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
        };
        const isValidPhone = validatePhone(phone);
        return {
          text: isValidPhone ? "Correct phone" : "Enter a valid phone number",
          color: isValidPhone ? "success" : "error",
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
        };
        const isValidSwift = validateSwift(swift);
        return {
          text: isValidSwift ? "Correct Swift" : "Enter a valid Swift code",
          color: isValidSwift ? "success" : "error",
        };
      }, [swift]
    );
      

    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };

    const { setVisible, bindings } = useModal();

	async function handleEmail () {
        try {
        const res =  await Api.getEmailData(email)
        const data = await res.json();
        setEmailResult(data);
        handler()
        } catch (err) {
        console.log('Error en mail');
        }
	};

    async function handlePhone () {
        try {
          setLoading(true);
          const res = Api.getPhoneData(phone);
          const data = await res.json();
          setPhoneResult(data);
          console.log(data);
          handler()
        } catch (err) {
          console.log('Error en phone number');
        }
        setLoading(false);
    };

    async function handleSwift () {
        try {
            const res = Api.getSwiftData(swift);
            const data = await res.json();
            setSwiftResult(data);
            handler()
        } catch (err) {
            console.log(err);
        }
    };

    async function handleKYC () {
        try {
            const res = await fetch(`http://localhost:8080/kyc_verification?kyc=${KYC}`);
            const data = await res.json();
            setKYCResult(data);
            handler()
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div style={{ padding: 15 }}>
            <Grid.Container
                justify="center"
                direction="column"
                alignContent="center"
            >
                <h2 style={{ textAlign: "center" }}>Search for scammers</h2>
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
                                css={{ width: 204 }}
                            >
                                Search by email
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
                                css={{ width: 204 }}
                            >
                                {loading? <Loading color="currentColor" size="sm" /> : 'Search by phone number'}
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
                                css={{ width: 204 }}
                            >
                                Search by Swift code
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Collapse>

                <Collapse title="Personal ID (KYC)" disabled>
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
                                css={{ width: 204 }}
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
        {...bindings}
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
          <Text id="modal-title" h2 style={ emailResult?.suspicious? { color: 'red' } : {color: 'green'} }>
            {emailResult?.suspicious? "Suspicious": "Not Suspicious"}
          </Text>
          <Text id="modal-title" size={20}>
            Reputation: <b>{emailResult?.reputation}</b>
          </Text>
          <Text id="modal-title" size={20} >
            Domain reputation: <b>{emailResult?.domain_reputation}</b>
          </Text>
          <Text id="modal-title" size={20} >
            {emailResult?.spam? "This is a spam email": "This is not a spam email"}
          </Text>
          <Text id="modal-title" size={20} >
          {emailResult?.blacklistes? "This email is blacklisted": "This email is not blacklisted"}
          </Text>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onPress={() => setVisible(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        
    );
}

export default SearchPage;