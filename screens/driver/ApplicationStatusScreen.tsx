import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface RequirementItem {
  id: string;
  title: string;
  status: 'approved' | 'warning' | 'pending' | 'not-started';
  statusText: string;
  icon: string;
}

const requirements: RequirementItem[] = [
  {
    id: '1',
    title: 'Personal Info',
    status: 'approved',
    statusText: 'Approved',
    icon: 'check-circle',
  },
  {
    id: '2',
    title: 'Driver License',
    status: 'approved',
    statusText: 'Approved',
    icon: 'check-circle',
  },
  {
    id: '3',
    title: 'Vehicle Insurance',
    status: 'warning',
    statusText: 'Re-upload needed',
    icon: 'priority-high',
  },
  {
    id: '4',
    title: 'Background Check',
    status: 'pending',
    statusText: 'In Progress',
    icon: 'schedule',
  },
  {
    id: '5',
    title: 'Bank Details',
    status: 'not-started',
    statusText: 'Not Started',
    icon: 'radio-button-unchecked',
  },
];

interface ApplicationStatusScreenProps {
  navigation: any;
}

export default function ApplicationStatusScreen({ navigation }: ApplicationStatusScreenProps) {
  const progressPercentage = 75;

  const handleBack = () => {
    navigation.goBack();
  };

  const handleHelp = () => {
    // Handle help button press
  };

  const handleFixNow = () => {
    // Handle fix now button press
  };

  const handleUploadDocuments = () => {
    // Handle upload documents button press
  };

  const getStatusColor = (status: RequirementItem['status']) => {
    switch (status) {
      case 'approved':
        return { background: '#0df20d1a', text: '#0df20d', icon: '#0df20d' };
      case 'warning':
        return { background: '#ef44441a', text: '#ef4444', icon: '#ef4444' };
      case 'pending':
        return { background: '#eab3081a', text: '#eab308', icon: '#eab308' };
      case 'not-started':
        return { background: '#6b72801a', text: '#6b7280', icon: '#6b7280' };
      default:
        return { background: '#6b72801a', text: '#6b7280', icon: '#6b7280' };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top App Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Application Status</Text>
        <TouchableOpacity style={styles.helpButton} onPress={handleHelp}>
          <MaterialIcons name="help" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Overall Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <View style={styles.progressTextContainer}>
              <Text style={styles.progressPercentage}>{progressPercentage}%</Text>
              <Text style={styles.progressLabel}>Complete</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>Pending Review</Text>
            </View>
          </View>
          
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${progressPercentage}%` }
              ]} 
            />
          </View>
          
          <Text style={styles.progressDescription}>
            We are currently reviewing your background check. This usually takes 24-48 hours.
          </Text>
        </View>

        {/* Action Required Alert */}
        <View style={styles.alertContainer}>
          <View style={styles.alertContent}>
            <View style={styles.alertHeader}>
              <MaterialIcons name="error" size={20} color="#ef4444" />
              <Text style={styles.alertTitle}>Action Required</Text>
            </View>
            <Text style={styles.alertMessage}>
              Your vehicle insurance document has expired. Please upload a valid policy.
            </Text>
          </View>
          <TouchableOpacity style={styles.fixButton} onPress={handleFixNow}>
            <Text style={styles.fixButtonText}>Fix Now</Text>
          </TouchableOpacity>
        </View>

        {/* Requirements Checklist */}
        <View style={styles.requirementsSection}>
          <Text style={styles.sectionTitle}>Requirements</Text>
          
          <View style={styles.requirementsList}>
            {requirements.map((item) => {
              const colors = getStatusColor(item.status);
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.requirementItem,
                    item.status === 'warning' && styles.requirementItemWarning,
                  ]}
                  activeOpacity={0.7}
                >
                  <View style={[styles.iconContainer, { backgroundColor: colors.background }]}>
                    <MaterialIcons 
                      name={item.icon as any} 
                      size={24} 
                      color={colors.icon} 
                    />
                  </View>
                  
                  <View style={styles.requirementInfo}>
                    <Text style={styles.requirementTitle}>{item.title}</Text>
                    <Text style={[styles.requirementStatus, { color: colors.text }]}>
                      {item.statusText}
                    </Text>
                  </View>
                  
                  <MaterialIcons name="chevron-right" size={20} color="#6b7280" />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Sticky Bottom Action */}
      <LinearGradient
        colors={['rgba(245, 248, 245, 0)', 'rgba(245, 248, 245, 1)', 'rgba(245, 248, 245, 1)']}
        style={styles.footer}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <TouchableOpacity 
          style={styles.uploadButton}
          onPress={handleUploadDocuments}
          activeOpacity={0.9}
        >
          <Text style={styles.uploadButtonText}>Upload Documents</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f8f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(245, 248, 245, 0.95)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  helpButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  progressSection: {
    marginTop: 8,
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  progressTextContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  progressPercentage: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  progressLabel: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: 'normal',
  },
  statusBadge: {
    backgroundColor: 'rgba(234, 179, 8, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(234, 179, 8, 0.2)',
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#eab308',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0df20d',
    borderRadius: 4,
  },
  progressDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  alertContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
    padding: 16,
    marginBottom: 24,
  },
  alertContent: {
    marginBottom: 16,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  alertMessage: {
    fontSize: 14,
    color: 'rgba(239, 68, 68, 0.8)',
    lineHeight: 20,
    marginLeft: 28,
  },
  fixButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#ef4444',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 36,
  },
  fixButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  requirementsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  requirementsList: {
    gap: 8,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 1)',
    gap: 16,
  },
  requirementItemWarning: {
    borderColor: 'rgba(239, 68, 68, 0.5)',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  requirementInfo: {
    flex: 1,
  },
  requirementTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 2,
  },
  requirementStatus: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  bottomSpacer: {
    height: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 40,
  },
  uploadButton: {
    backgroundColor: '#0df20d',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0df20d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  uploadButtonText: {
    color: '#102210',
    fontSize: 16,
    fontWeight: 'bold',
  },
});