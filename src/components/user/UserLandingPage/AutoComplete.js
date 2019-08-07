import React, { Component } from "react";
import './AutoComplete.css';
import { Link, Redirect } from 'react-router-dom';
import { Input } from '@material-ui/core';

class Autocomplete extends Component {

    state = {
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: ""
    }

    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        if (e.keyCode === 13) {
            return (
                <Redirect
                    to={{
                        pathname: `/city/${filteredSuggestions[activeSuggestion].name}`,
                        id: filteredSuggestions[activeSuggestion].id,
                    }}
                />
            )
        }

        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }

        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            onChange,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, i) => {
                            let className;

                            if (i === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <li key={i}>
                                    <Link
                                        style={{ display: 'block' }}
                                        to={{
                                            pathname: `/city/${suggestion.name}`,
                                            id: suggestion.id,
                                        }}
                                    >
                                        {suggestion.name}, {suggestion.country_id}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <>
                    </>
                );
            }
        }

        return (
            <>
                <Input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    placeholder="Where are you traveling?"
                    style={{ width: `85%` }}
                    value={userInput}
                />
                {suggestionsListComponent}
            </>
        );
    }
}

export default Autocomplete;