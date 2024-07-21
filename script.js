document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('votingForm');
    const resultsDiv = document.getElementById('results');
    const resultsList = document.getElementById('resultsList');
    const votes = {
        "Candidate A": 0,
        "Candidate B": 0,
        "Candidate C": 0
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const voterName = document.getElementById('voterName').value.trim();
        const voterId = document.getElementById('voterId').value.trim();
        const selectedCandidate = document.querySelector('input[name="candidate"]:checked').value;

        if (!voterName || !voterId) {
            alert('Please enter your name and voter ID.');
            return;
        }

        if (!selectedCandidate) {
            alert('Please select a candidate.');
            return;
        }

        // Record the vote
        votes[selectedCandidate] += 1;

        // Hide the form and show the results
        form.classList.add('hidden');
        resultsDiv.classList.remove('hidden');

        // Display the results
        updateResults();
    });

    function updateResults() {
        resultsList.innerHTML = '';
        for (const [candidate, voteCount] of Object.entries(votes)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${candidate}: ${voteCount} votes`;
            resultsList.appendChild(listItem);
        }
    }
});
