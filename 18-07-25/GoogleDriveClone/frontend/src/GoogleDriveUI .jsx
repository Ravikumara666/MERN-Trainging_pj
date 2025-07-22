import React, { useState, useEffect } from 'react';
import { Folder, FileText, Plus, Search, Grid, List, MoreVertical, Star, Trash2, Clock, Settings, RefreshCw } from 'lucide-react';

const GoogleDriveUI = () => {
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [showCreateFile, setShowCreateFile] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // State for files and folders from backend
  const [allFiles, setAllFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);

  // API base URL
  const API_BASE = 'http://localhost:3000';

  // Fetch all files and folders from backend
const fetchData = async () => {
  setLoading(true);
  setError('');
  try {
    const response = await fetch(API_BASE);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    setAllFiles(data);

    const foldersData = [];
    const filesData = [];

    data.forEach(item => {
      if (item.isDirectory) {
        foldersData.push({
          id: item.name,
          name: item.name,
          type: 'folder',
          modified: new Date(item.modified).toLocaleDateString(),
          size: '—'
        });
      } else {
        filesData.push({
          id: item.name,
          name: item.name,
          type: 'file',
          modified: new Date(item.modified).toLocaleDateString(),
          size: (item.size / 1024).toFixed(2) + ' KB'
        });
      }
    });

    setFolders(foldersData);
    setFiles(filesData);
  } catch (err) {
    setError('Failed to load files: ' + err.message);
    console.error('Error fetching data:', err);
  } finally {
    setLoading(false);
  }
};


  // Load data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Create folder
  const handleCreateFolder = async (e) => {
    if (e) e.preventDefault();
    if (!folderName.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/upload-dir`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dirName: folderName.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to create folder');
      }

      const result = await response.text();
      console.log('Folder created:', result);
      
      // Refresh the data
      await fetchData();
      
      // Reset form
      setFolderName('');
      setShowCreateFolder(false);
      setError('');
    } catch (err) {
      setError('Failed to create folder: ' + err.message);
      console.error('Error creating folder:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create file
  const handleCreateFile = async (e) => {
    if (e) e.preventDefault();
    if (!fileName.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/upload-file`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          fileName: fileName.trim(),
          content: fileContent || '' // Default to empty content if not provided
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create file');
      }

      const result = await response.text();
      console.log('File created:', result);
      
      // Refresh the data
      await fetchData();
      
      // Reset form
      setFileName('');
      setFileContent('');
      setShowCreateFile(false);
      setError('');
    } catch (err) {
      setError('Failed to create file: ' + err.message);
      console.error('Error creating file:', err);
    } finally {
      setLoading(false);
    }
  };

  const allItems = [...folders, ...files];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Create Button */}
        <div className="p-4">
          <div className="relative">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={20} />
              <span>Create</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => setShowCreateFolder(true)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <Folder size={20} className="text-gray-600" />
                <span>New Folder</span>
              </button>
              <button
                onClick={() => setShowCreateFile(true)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <FileText size={20} className="text-gray-600" />
                <span>New File</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg">
              <Folder size={20} className="text-gray-600" />
              <span>My Drive</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg">
              <Star size={20} className="text-gray-600" />
              <span>Starred</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg">
              <Clock size={20} className="text-gray-600" />
              <span>Recent</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg">
              <Trash2 size={20} className="text-gray-600" />
              <span>Trash</span>
            </button>
          </div>
        </nav>

        {/* Storage Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{allItems.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Folders: {folders.length}</span>
              <span>Files: {files.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-medium text-gray-900">My Drive</h1>
              {loading && <RefreshCw className="animate-spin" size={20} />}
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={fetchData}
                className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <RefreshCw size={16} />
                <span>Refresh</span>
              </button>
              
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search in Drive"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {loading && allItems.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-gray-500">Loading...</div>
            </div>
          ) : allItems.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-gray-500">No files or folders found</div>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allItems.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex flex-col items-center">
                      {item.type === 'folder' ? (
                        <Folder size={48} className="text-blue-500 mb-2" />
                      ) : (
                        <FileText size={48} className="text-gray-500 mb-2" />
                      )}
                      <span className="text-sm text-gray-900 text-center truncate w-full" title={item.name}>
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">{item.modified}</span>
                    </div>
                    <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-gray-100 transition-opacity">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                <div className="col-span-6">Name</div>
                <div className="col-span-3">Modified</div>
                <div className="col-span-2">Size</div>
                <div className="col-span-1"></div>
              </div>
              {allItems.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0">
                  <div className="col-span-6 flex items-center gap-3">
                    {item.type === 'folder' ? (
                      <Folder size={20} className="text-blue-500" />
                    ) : (
                      <FileText size={20} className="text-gray-500" />
                    )}
                    <span className="text-sm text-gray-900">{item.name}</span>
                  </div>
                  <div className="col-span-3 text-sm text-gray-600">{item.modified}</div>
                  <div className="col-span-2 text-sm text-gray-600">{item.size}</div>
                  <div className="col-span-1">
                    <button className="p-1 rounded hover:bg-gray-100">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Create Folder Modal */}
      {showCreateFolder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Create New Folder</h2>
            <div>
              <input
                type="text"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                placeholder="Folder name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                autoFocus
                onKeyPress={(e) => e.key === 'Enter' && handleCreateFolder(e)}
              />
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowCreateFolder(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreateFolder}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create File Modal */}
      {showCreateFile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Create New File</h2>
            <div>
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="File name (e.g., myfile.txt)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                autoFocus
              />
              <textarea
                value={fileContent}
                onChange={(e) => setFileContent(e.target.value)}
                placeholder="File content (optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 h-32 resize-none"
              />
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowCreateFile(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreateFile}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleDriveUI;