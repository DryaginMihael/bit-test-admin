import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Admin from "./Admin";

describe("ADMIN TESTS", () => {
    test("TABLE EXISTS", () => {
        render(<Admin />);
        const usersTable = screen.queryByRole('table');
        expect(usersTable).toBeInTheDocument();
    })

    test("EMPTY SEARCH", async () => {
        render(<Admin />);
        const searchBar = screen.getByPlaceholderText(/поиск/i);
        userEvent.type(searchBar, '/**80727390)(()~');
        const usersTable = await screen.findByRole('table');
        expect(usersTable).toBeNull();
        
    })
})