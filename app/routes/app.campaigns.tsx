import { InlineGrid, Layout, LegacyCard, Page, Tabs, Text } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'
import { tabs } from '~/utils/tabs';
import CreateCampaignForm from './app.createCampaignForm';

type Props = {}

const CampaignsPage = (props: Props) => {
    const [selected, setSelected] = useState(0);
    const [activate, setActivate] = useState(false);


    const handleTabChange = useCallback((selectedTabIndex: number) => setSelected(selectedTabIndex), []);

  return (
    <Page>
        <Layout>
            <Layout.Section>
                <InlineGrid columns={2}>
                    <Text variant='heading3xl' as="h2">Campaigns</Text>
                </InlineGrid>
            </Layout.Section>
            <Layout.Section>
                <LegacyCard>
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                        <LegacyCard.Section title={tabs[selected].content}>
                            {tabs[selected].component}
                        </LegacyCard.Section>
                    </Tabs>
                </LegacyCard>
            </Layout.Section>

            <CreateCampaignForm activate={activate} setActivate={setActivate} />
        </Layout>
    </Page>
  )
}

export default CampaignsPage;