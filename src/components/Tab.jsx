import styled from "styled-components";

const TabWrapper = styled.ul`
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 10px 0;
    padding: 0;
    list-style: none;
    @media (max-width: 600px){
        display: flex;
    }
`;

const TabItem = styled.li`
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &.active{
        background-color: #eee;
    }
`;

function Tab({ tabs, tab, setTab }) {
    return (
        <TabWrapper>
        {tabs.map((t, i) => (
            <TabItem key={i} onClick={() => setTab(t.type)} className={t.type === tab ? "active" : ""}>{t.title}</TabItem>
        ))}
        </TabWrapper>
    );
}

export default Tab;