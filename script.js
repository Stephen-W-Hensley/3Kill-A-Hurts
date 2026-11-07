const tracks = [
    { id: 'N-P7Gg_IcNc', title: '3 Kill-A-Hurts - Chokehold of the Sun', thumbnail: 'https://i.ytimg.com/vi/N-P7Gg_IcNc/maxresdefault.jpg' },
    { id: 'pd9Gw2dW6m0', title: '3 Kill-A-Hurts - Neon Altar', thumbnail: 'https://i.ytimg.com/vi/pd9Gw2dW6m0/maxresdefault.jpg' },
    { id: 'wRKJuc7OCto', title: '3 Kill-A-Hurts - Midnight Mesa', thumbnail: 'https://i.ytimg.com/vi/wRKJuc7OCto/maxresdefault.jpg' },
    { id: 'lzrYGqFK89I', title: '3 Kill-A-Hurts - The Static Choir', thumbnail: 'https://i.ytimg.com/vi/lzrYGqFK89I/maxresdefault.jpg' },
    { id: 'UnYZWIB76Co', title: '3 Kill-A-Hurts - Frequency of You', thumbnail: 'https://i.ytimg.com/vi/UnYZWIB76Co/maxresdefault.jpg' },
    { id: 'i4ba2l1vle8', title: '3 Kill-A-Hurts - Dust & Diamonds', thumbnail: 'https://i.ytimg.com/vi/i4ba2l1vle8/maxresdefault.jpg' },
    { id: 'suRTjSh0G94', title: '3 Kill-A-Hurts - Vessel of Ash', thumbnail: 'https://i.ytimg.com/vi/suRTjSh0G94/maxresdefault.jpg' },
    { id: 'MFbJKADY3Fo', title: '3 Kill-A-Hurts - Veins of the Pantheon - Immortal Edition (Full Album)', thumbnail: 'https://i.ytimg.com/vi/MFbJKADY3Fo/maxresdefault.jpg' },
    { id: 'ktbC6gZVSg8', title: '3 Kill-A-Hurts - Electric Devotion', thumbnail: 'https://i.ytimg.com/vi/ktbC6gZVSg8/maxresdefault.jpg' },
    { id: 'V6kLxJOKT38', title: '3 Kill-A-Hurts - Elixir of Life', thumbnail: 'https://i.ytimg.com/vi/V6kLxJOKT38/hqdefault.jpg' }
];

const playlistElement = document.getElementById('playlist');
const playerElement = document.getElementById('youtube-player');

function loadTrack(trackId, listItem) {
    // Update iframe source
    playerElement.src = `https://www.youtube.com/embed/${trackId}?autoplay=1`;
    
    // Update active state in playlist
    document.querySelectorAll('.track-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (listItem) {
        listItem.classList.add('active');
    }
}

function initializePlaylist() {
    tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.className = 'track-item';
        
        // Clean up title (remove '3 Kill-A-Hurts - ' prefix if present)
        const displayTitle = track.title.replace('3 Kill-A-Hurts - ', '');
        
        li.innerHTML = `
            <img src="${track.thumbnail}" alt="${displayTitle}" class="track-thumbnail" onerror="this.src='https://i.ytimg.com/vi/${track.id}/hqdefault.jpg'">
            <div class="track-info">
                <span class="track-title">${displayTitle}</span>
            </div>
        `;
        
        li.addEventListener('click', () => loadTrack(track.id, li));
        
        playlistElement.appendChild(li);
        
        // Load first track by default
        if (index === 0) {
            loadTrack(track.id, li);
            // Don't autoplay the first track on initial load to respect browser policies
            playerElement.src = `https://www.youtube.com/embed/${track.id}`;
        }
    });
}

document.addEventListener('DOMContentLoaded', initializePlaylist);
