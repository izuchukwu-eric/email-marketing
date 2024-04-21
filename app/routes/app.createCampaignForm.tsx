import { ActionFunction } from '@remix-run/node';
import { Form, useActionData, useSubmit } from '@remix-run/react';
import { Button, Frame, Layout, Modal, Page, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'

type CreateCampaignFormProps = {
    activate: boolean;
    setActivate: React.Dispatch<React.SetStateAction<boolean>>; 
}

export const action: ActionFunction = async ({ request }) => {}

const CreateCampaignForm: React.FC<CreateCampaignFormProps> = ({ activate, setActivate }) => {
    const [value, setValue] = useState('default');

    const handleChange = useCallback(() => setActivate(!activate), [activate]);

    const handleChangeText = useCallback((newValue: string) => setValue(newValue), []);

    const activator = <Button onClick={handleChange}>Create new</Button>;


    const submit = useSubmit();
    const actionData = useActionData<typeof action>();

    const sendEmails = () => submit({}, { replace: true, method: "POST" })

    return (
        <Page>
            <Frame>
                <Modal 
                    activator={activator} 
                    open={activate} 
                    onClose={handleChange} 
                    title="Create new Email Campaign"
                    primaryAction={{
                        content: "Send",
                        onAction: sendEmails
                    }}
                >
                    <Modal.Section>
                        <Form>
                            <Layout>
                                <Layout.Section>
                                    <TextField 
                                        label="Campaign Name"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete='off'
                                    />
                                    <TextField 
                                        label="Corporation"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete='off'
                                    />
                                    <TextField 
                                        label="From"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete='off'
                                    />
                                    <TextField 
                                        label="Email Subject"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete='off'
                                    />
                                    <TextField 
                                        label="Content"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete='off'
                                    />

                                    {/* <Button submit>send</Button> */}
                                </Layout.Section>
                            </Layout>
                        </Form>
                    </Modal.Section>
                </Modal>
            </Frame>
        </Page>
    )
}

export default CreateCampaignForm